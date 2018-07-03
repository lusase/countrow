const fs = require('fs')

const path = require('path')

const util = require('util')

const readFile = util.promisify(fs.readFile)

const readdir = util.promisify(fs.readdir)

const stat = util.promisify(fs.stat)

async function walkDir(root = './', includeNodeModules = false) {
  let rows = 0
  let fileCount = 0
  async function _walkDir(root) {
    const res = await readdir(root)
    const files = includeNodeModules ? res : res.filter(file => file !== 'node_modules')
    await Promise.all(files.map(async file => {
      try {
        const filePath = path.join(root, file)
        const s = await stat(path.join(root, file))
        if (s.isFile()) {
          fileCount++
          const text = await readFile(filePath, {
            encoding: 'utf-8'
          })
          rows += text.split(/\r?\n/g).length
        } else {
          await _walkDir(filePath)
        }
      } catch (error) {
        console.log(error)
      }
    }))
  }
  await _walkDir(root)
  return {
    fileCount,
    rows
  }
}

module.exports = walkDir

