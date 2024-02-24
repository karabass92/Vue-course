import { ChartBarIcon, ClockIcon, ListBulletIcon } from "@heroicons/vue/16/solid"

export const PAGE_TIMELINE: string = 'timeline'
export const PAGE_ACTIVITIES: string = 'activities'
export const PAGE_PROGRESS: string = 'progress'

export const navItems = {
    [PAGE_TIMELINE]: ClockIcon,
    [PAGE_ACTIVITIES]: ListBulletIcon,
    [PAGE_PROGRESS]: ChartBarIcon
  }