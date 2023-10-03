import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { jobCategoryValidationSchema } from 'validationSchema/job-categories';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.job_category
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getJobCategoryById();
    case 'PUT':
      return updateJobCategoryById();
    case 'DELETE':
      return deleteJobCategoryById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getJobCategoryById() {
    const data = await prisma.job_category.findFirst(convertQueryToPrismaUtil(req.query, 'job_category'));
    return res.status(200).json(data);
  }

  async function updateJobCategoryById() {
    await jobCategoryValidationSchema.validate(req.body);
    const data = await prisma.job_category.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteJobCategoryById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.job_category.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
