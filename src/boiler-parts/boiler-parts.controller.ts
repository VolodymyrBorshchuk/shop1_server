import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('boiler-parts')
export class BoilerPartsController {
    constructor(private readonly boilerPartsService: BoilerPartsService) { }

    @UseGuards(AuthenticatedGuard)
    @Get()
    paginateAndFilter(@Query() query) {
        return this.boilerPartsService.paginetedAndFilter(query)
    }

    @UseGuards(AuthenticatedGuard)
    @Get('find/:id')
    getOne(@Param('id') id: string) {
        return this.boilerPartsService.findOne(id)
    }

    @UseGuards(AuthenticatedGuard)
    @Get('bestsellers')
    getBestsellers() {
        return this.boilerPartsService.bestsellers();
    }

    @UseGuards(AuthenticatedGuard)
    @Get('new')
    getNew() {
        return this.boilerPartsService.new();
    }
}
