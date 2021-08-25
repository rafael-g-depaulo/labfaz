import React, { PropsWithChildren, ReactElement, ReactNode, useCallback, useMemo, useState } from "react"
import RcPagination, { PaginationProps as PagProps } from "rc-pagination"

import { PaginationControls } from "./styles"
import isFunction from "Utils/isFunction"

export interface PaginationProps<T> {
  baseProps?: PagProps
  children?: ((pageItems: T[]) => ReactNode) | ReactNode
  itemsPerPage?: number
  items: T[]
}

export const Pagination = <T extends any> ({
  items,
  baseProps = {},
  itemsPerPage = 10,
  children,
}: PropsWithChildren<PaginationProps<T>>): ReactElement<PaginationProps<T>> => {
    const [page, setPage] = useState(1)

    const renderedItems = useMemo<T[]>(() => {
      const slicedItems = items.slice((page-1)*itemsPerPage, page*itemsPerPage)
      return slicedItems
    }, [itemsPerPage, page, items])

    const onChange = useCallback(page => setPage(page), [page, setPage])
    return (
    <>
      {isFunction(children) ? children(renderedItems) : children}

      <PaginationControls>
        <RcPagination
          onChange={onChange}
          pageSize={itemsPerPage}
          current={page}
          total={items.length}
          locale={{
            items_per_page: "itens por página",
            next_page: "próxima",
            prev_page: "anterior",
          }}
          prevIcon="<"
          nextIcon=">"
          showPrevNextJumpers
          {...baseProps}
        />
      </PaginationControls>
    </>
  )
}

export default Pagination
