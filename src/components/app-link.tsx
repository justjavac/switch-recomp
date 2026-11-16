import type { ComponentProps } from "react";
import NextLink from "next/link";

// 全站关闭路由预取：避免可见链接（尤其在广告引起布局变化时）反复发起 RSC 请求。
export default function Link(props: ComponentProps<typeof NextLink>) {
  return <NextLink {...props} prefetch={false} />;
}
