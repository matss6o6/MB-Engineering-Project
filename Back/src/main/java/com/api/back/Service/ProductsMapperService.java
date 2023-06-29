package com.api.back.Service;

import com.api.back.Service.ShoppingCart.DTO.ShoppingCartItemDto;
import com.api.back.Service.ShoppingCart.FetchDataStrategy;
import com.api.back.Service.ShoppingCart.shoppingCartItemMapper.*;
import com.api.back.model.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ProductsMapperService {
    private final FetchDataStrategy<Accessories> accessoriesFetchDataStrategy;
    private final FetchDataStrategy<Procesors> procesorsFetchDataStrategy;
    private final FetchDataStrategy<Computers> computersFetchDataStrategy;
    private final FetchDataStrategy<Graphic> graphicFetchDataStrategy;
    private final FetchDataStrategy<Ram> ramFetchDataStrategy;
    private final FetchDataStrategy<Disc> discFetchDataStrategy;

    public ShoppingCartItemDto mapItem(ShoppingCartItem item){
        switch (item.getProductType()){
            case ACCESSORIE -> {
                return AccessoriesMapper.map(accessoriesFetchDataStrategy.fetch(item.getProductId()), item);
            }
            case PROCESOR -> {
                return ProcessorsMapper.map(procesorsFetchDataStrategy.fetch(item.getProductId()), item);
            }
            case COMPUTER -> {
                return ComputerMapper.map(computersFetchDataStrategy.fetch(item.getProductId()), item);
            }
            case GRAPHIC -> {
                return GraphicMapper.map(graphicFetchDataStrategy.fetch(item.getProductId()), item);
            }
            case RAM -> {
                return RamMapper.map(ramFetchDataStrategy.fetch(item.getProductId()), item);
            }
            case DISC -> {
                return DiscMapper.map(discFetchDataStrategy.fetch(item.getProductId()), item);
            }
            default -> throw new IllegalStateException("not found product type");
        }
    }

    public ShoppingCartItemDto mapItem(OrderItem item){
        switch (item.getProductType()){
            case ACCESSORIE -> {
                return AccessoriesMapper.map(accessoriesFetchDataStrategy.fetch(item.getPrzedmiotId()), item);
            }
            case PROCESOR -> {
                return ProcessorsMapper.map(procesorsFetchDataStrategy.fetch(item.getPrzedmiotId()), item);
            }
            case COMPUTER -> {
                return ComputerMapper.map(computersFetchDataStrategy.fetch(item.getPrzedmiotId()), item);
            }
            case GRAPHIC -> {
                return GraphicMapper.map(graphicFetchDataStrategy.fetch(item.getPrzedmiotId()), item);
            }
            case RAM -> {
                return RamMapper.map(ramFetchDataStrategy.fetch(item.getPrzedmiotId()), item);
            }
            case DISC -> {
                return DiscMapper.map(discFetchDataStrategy.fetch(item.getPrzedmiotId()), item);
            }
            default -> throw new IllegalStateException("not found product type");
        }
    }


}
