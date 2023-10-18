'use server'

export async function createRequest(request: Request): Promise<Request> {
  console.log('createRequest' + JSON.stringify(request))
  return request
}
