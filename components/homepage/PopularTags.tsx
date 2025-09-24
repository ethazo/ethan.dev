import { map } from 'lodash'

import popularTags from '@/data/popularTags'

import Link from '@/components/ui/Link'
import BrandIcon from '@/components/ui/BrandIcon'

const PopularTags = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 py-6 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          Popular Tags
        </h1>
        <p className="!mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400">
          Popular tags feature the most widely favored topics.
        </p>
      </div>

      <div className="popular-tags grid grid-cols-2 gap-4 py-6 md:grid-cols-3 xl:grid-cols-6">
        {map(popularTags, (popularTag) => {
          const { slug, iconType, href, title } = popularTag

          const className = `${slug} flex w-[128px] justify-center space-x-2 rounded-lg p-3`

          return (
            <Link key={slug} href={href} className={className}>
              <BrandIcon type={iconType} className="h-6 w-6" />
              <div className="my-auto text-white">{title}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default PopularTags
