import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('shopping-cart')
export class ShoppingCartController {
    constructor(private readonly shoppingCartService: ShoppingCartService) { }

    @UseGuards(AuthenticatedGuard)
    @Get(':id')
    getAll(@Param('id') userId: string) {
        return this.shoppingCartService.findAll(userId)
    }
}
