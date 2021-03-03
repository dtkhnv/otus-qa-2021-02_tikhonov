## Getting started
#### Установка Git
Скачать [тут](https://git-scm.com/downloads). Запускается через командную строку или терминал с команды **git**

#### Основные команды
- `git init` Позволяет проинициализировать репозиторий в текущей папке
- `git status` Показывает текущий статус
- **git add** Отслеживает изменения файлов
    - `git add index.html` добавляет index.html
    - `git add .` добавляет все файлы
- **git commit** Сохраняет изменения в коммит
    - `git commit -m 'update ...'` создает коммит с сообщением
- **git branch** Работа с ветками в репозитории
    - `git branch` показывает список веток
    - `git branch branch-name` создает новую ветку branch-name
    - `git branch -D branch-name` удаляет ветку branch-name
- **git checkout** Переключается на другую ветку
    - `git checkout branch-name` переключается на последний коммит в ветке
      branch-name
    - `git checkout -b branch-name` создает и переключается на ветку branch-name
- **git merge** Совмещает текущую ветку с выбранной
    - `git merge branch-name` совмещает текущую ветку с branch-name
- `git push` Заливает текущие локальные коммиты в удаленный репозиторий
- `git pull` Забирает изменения с удаленного репозитория в локальный
- `git clone` Клонирует проект с удаленного репозитория
- **git rebase** Совмещает текущую ветку с выбранной + все коммиты
    - `git rebase branch-name` совмещает текущую ветку с branch-name + коммиты