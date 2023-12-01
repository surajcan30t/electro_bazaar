import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import { join } from "path"

export async function POST(req, res) {
    const data = await req.formData()
    const file = data.get('file') 
    if(!file){
        return NextResponse.json({success:false, message:'file not uploaded'})
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join('D:/','temp', file.name)
    await writeFile(path,buffer);
    console.log(`open ${path} to see the file`)
    return NextResponse.json({success:true, message:'file uploaded'})
}