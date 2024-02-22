import { NextRequest, NextResponse } from 'next/server';
import { ParseFormModel } from '@/models/parse-form.model';
import axios from 'axios';



export async function POST(req: NextRequest, second: any){
  const { url }: ParseFormModel = await req.json();

  try {

    const result = await axios.get(url);

    return NextResponse.json({message: 'hello world', result: result.data})
  }catch (e){
    return new NextResponse(JSON.stringify({ success: false, message: 'Bad request!' }), {status: 400, headers: { 'content-type': 'application/json' }})
  }



}
