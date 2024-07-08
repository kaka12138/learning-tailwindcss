### Utility-First Fundamentals
- 1. utility classes

### utility classes
- 1. 简单理解, tailwindcss提供的类名, 比如: p-6, flex, bg-white等
- 2. 与传统CSS编写的对比：
    - 1. 减少在起类名的时间和精力
    - 2. 与传统的CSS相比，随着项目的迭代，CSS文件会变的很大，而tailwindcss提供的类名时可以复用的
    - 3. 相比与全局CSS, 根据class来改动会很安全
- 3. 与内联样式的对比:
    - 1. 便于系统的设计。内联样式使用的值往往是写固定且随意的，而使用class可从以设计系统中选择出预先定义的值
    - 2. 响应式。在内联样式中是不能使用媒体查询的, 而tailwindcss提供的类名可以方便的实现
    - 3. Hover, focus, 其他状态。内联无法表示像Hover, focus这样的元素状态, 而tailwindcss提供的state variants可以方便的实现
- 4. 可维护性
    - 1. 可以提取组件，和使用编辑器快捷编辑等能力提升可维护性
    - 2. 维护HTML比维护CSS更容易