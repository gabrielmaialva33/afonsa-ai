import { Bot } from '@/bot/core/bot'
import { Logger } from '@/helpers/logger.utils'

Bot().then(() => Logger.info('Bot started', 'Bot'))
