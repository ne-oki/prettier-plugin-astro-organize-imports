export const input = `
---
import Foo from './Foo.astro'
import Bar from './Bar.astro'
import { foo } from './Baz'
import { bar, baz } from './Baz'
---


<Foo class="  sm:p-0   p-0 ">
  <Bar>{foo} {bar}</Bar>
</Foo>
`.trim()

const expectedBasic = `
---
import Bar from './Bar.astro'
import { bar,foo } from './Baz'
import Foo from './Foo.astro'
---


<Foo class="  sm:p-0   p-0 ">
  <Bar>{foo} {bar}</Bar>
</Foo>
`.trim()

const expectedSortAndCombine = `
---
import Bar from './Bar.astro'
import { bar,baz,foo } from './Baz'
import Foo from './Foo.astro'
---


<Foo class="  sm:p-0   p-0 ">
  <Bar>{foo} {bar}</Bar>
</Foo>
`.trim()

const expectedRemoveUnused = `
---
import Foo from './Foo.astro'
import Bar from './Bar.astro'
import { foo } from './Baz'
import { bar } from './Baz'
---


<Foo class="  sm:p-0   p-0 ">
  <Bar>{foo} {bar}</Bar>
</Foo>
`.trim()

const expectedWithAstroPlugin = `
---
import Bar from './Bar.astro'
import { bar, foo } from './Baz'
import Foo from './Foo.astro'
---

<Foo class="sm:p-0 p-0">
  <Bar>{foo} {bar}</Bar>
</Foo>
`.trim()

const expectedWithAstroAndTailwindCSSPlugins = `
---
import Bar from './Bar.astro'
import { bar, foo } from './Baz'
import Foo from './Foo.astro'
---

<Foo class="p-0 sm:p-0">
  <Bar>{foo} {bar}</Bar>
</Foo>
`.trim()

export const expected = {
  basic: expectedBasic,
  sortAndCombine: expectedSortAndCombine,
  removeUnused: expectedRemoveUnused,
  withAstroPlugin: expectedWithAstroPlugin,
  withAstroAndTailwindCSSPlugins: expectedWithAstroAndTailwindCSSPlugins,
}