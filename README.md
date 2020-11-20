# 基本操作
git init 新建一个空的仓库
git status 查看状态
git branch 查看所有分支
git branch newname 创建一个叫newname的分支
git checkout newname 切换到叫newname的分支上
git add . 添加文件
git rm -r xxx.txt  删除文件
git commit -m '注释' 提交添加的文件并备注说明
git remote add origin git@github.com:jinzhaogit/git.git 连接远程仓库
git push origin master 将本地仓库文件推送到远程仓库
git pull origin master 将远程仓库文件更新到本地仓库
git remote -v  查看远程仓库
git fetch origin master:newname  本地新建一个newname分支，并将远程origin仓库的master分支代码下载到本地newname分支
git diff newname 比较本地代码与刚刚从远程下载下来的代码的区别
git merge newname 把newname分支合并到当前分支上
git branch -d newname  删除newname分支
git log 查看变更日志
git reset --hard 版本号前六位 回归到指定版本
git pull origin master 将master分支上的内容拉到本地上
# 删除本地文件后重新拉取最新
git fetch --all   
git reset --hard origin/master 
git pull
或
git checkout file(文件名)
# 将已提交的文件忽略
git rm -r --cached node_modules
git add . -A
git commit -m "remove xxx"
git push
# 添加新功能时
git checkout -b login 创建一个新的login分支并进入此分支
git status
git add .
git commit -m "xxx"
git branch
git checkout master
git branch
git merge login
git push
# 把新分支添加到云端
git checkout login
git branch
git push -u origin login
