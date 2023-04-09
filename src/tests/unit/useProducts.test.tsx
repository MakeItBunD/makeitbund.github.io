import { renderHook } from '@testing-library/react'
import { useProducts } from "../../hooks/useProducts";

test('useProducts should return IProduct[] which length equal 21 by default',() => {
    //act
    const { result } = renderHook(() => useProducts())

    //assert
    expect(result.current.length).toBe(21)
})