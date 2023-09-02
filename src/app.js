import './styles.css'

import { ContextMenu } from './menu'
import { TestModule } from './modules/test.module'
import { RandomSoundModule } from './modules/random-sound.module'
import { RandomQuoteModule } from './modules/random-quote.module'

const contextMenu = new ContextMenu('#menu')
const backgroundModule = new BackgroundModule('add_text_block', 'Изменить задний фон сайта')
const timerModule = new TimerModule('add_text_block', 'Таймер')
const addTestModule = new TestModule(
  'add_text_block',
  'Добавить тестовый блок с текстом'
)
const randomSoundModule = new RandomSoundModule('sound', 'Случайный звук')
const randomQuoteModule = new RandomQuoteModule('quote', 'Случайная цитата')

contextMenu.add(addTestModule)
contextMenu.add(randomSoundModule)
contextMenu.add(randomQuoteModule)
contextMenu.add(backgroundModule)
contextMenu.add(timerModule)

document.body.addEventListener('contextmenu', (event) => {
  contextMenu.showContextMenu(event)
})
