import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Query,
} from '@nestjs/common';
import { PetDto } from './dto/pet.dto';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  findAll(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('search') search: string = '',
  ) {
    const limit = 16;
    return this.petsService.findAll(page, limit, search);
  }

  @Get('pages')
  getPages(@Query('search') search: string = '') {
    const limit = 16;
    return this.petsService.getPages(limit, search);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: PetDto) {
    return this.petsService.update(+id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(+id);
  }
}
