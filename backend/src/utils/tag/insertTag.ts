import {Tag} from "../interfaces/Tag"
import {connect} from '../database.utils'

export async function insertTag(tag: Tag) : Promise<string> {
  const mysqlConnection = await connect()
  const mysqlQuery = 'INSERT INTO tag(tagId, tagName) VALUES(UUID_TO_BIN(UUID()), :tagName)'
  await mysqlConnection.execute(mysqlQuery, {tagName: tag.tagName})
  await mysqlConnection.release()
  return "tag created okay"
}