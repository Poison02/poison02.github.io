/*
 * @Author: Poison02 2069820192@qq.com
 * @Date: 2024-03-27 21:41:48
 * @LastEditors: Poison02 2069820192@qq.com
 * @LastEditTime: 2024-03-28 18:53:12
 * @FilePath: /blog/data/features.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import Translate, { translate } from '@docusaurus/Translate'

export type FeatureItem = {
  title: string
  text: JSX.Element
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: 'Java工程师',
    }),
    text: (
      <Translate>
        作为一名Java语言爱好者，Java强大的生态就是答案，目前大四马上毕业，工作也打算做Java。
      </Translate>
    ),
    Svg: WebDeveloperSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '爱好：Java和React',
    }),
    text: (
      <Translate>
        作为一名后端主力，前端知识当然不能少，前端比较喜欢React。
      </Translate>
    ),
    Svg: SpiderSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '开源爱好者',
    }),
    text: (
      <Translate>
        喜欢阅读别人的开源项目，希望贡献自己的力量，一起打造一个开源社区。
      </Translate>
    ),
    Svg: OpenSourceSvg,
  },
]

export default FEATURES
