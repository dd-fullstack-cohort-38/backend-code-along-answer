import { Tag } from '../interfaces/Tag'
import { insertTag } from './insertTag'

async function testInsertTag(): Promise<void> {
  try {
    const tag: Tag = { tagId: null, tagName: 'DELETE ALL NODE MODULES FOREVER' }
   const result = await insertTag(tag)
    console.log(result)

  } catch (error) {
    console.log(error)
  }
}

testInsertTag()