export const revalidate = 60

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	return Response.json({
		id: params.id,
		message: `获取用户 ${params.id} 的信息`
	})
}

export async function POST(
	request: Request,
	{ params }: { params: { id: string } }
) {
	// 从请求体中获取数据
	const body = await request.json()

	return Response.json({
		id: params.id,
		message: `更新用户 ${params.id} 的信息`,
		receivedData: body
	})
}