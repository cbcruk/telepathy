export type Channel = {
  id: string
  percent: string
  name: string
  category: string
  time: string
  times: string
  channel: string
}

export type Channels = Channel[]

export type Props = {
  className?: string
  channels: Channels
}
