export const revalidate = 60

export async function GET() {
	try {
		// 返回一些测试数据
		return Response.json({
			status: 'success',
			message: 'API is working',
			data: {
				time: new Date().toISOString(),
				test: 'Hello from API'
			}
		})
	} catch (error) {
		return Response.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		)
	}
}