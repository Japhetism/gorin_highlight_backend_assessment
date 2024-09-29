import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { HighlightsService } from './highlights.service';
import { IHighlight } from './highlight.interface';

@Controller('highlights')
export class HighlightsController {
  constructor(private readonly highlightsService: HighlightsService) {}

  @Post()
  create(@Body() highlight: Omit<IHighlight, 'id'>): IHighlight {
    return this.highlightsService.create(highlight);
  }

  @Get()
  findAll(): IHighlight[] {
    return this.highlightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): IHighlight {
    return this.highlightsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() highlight: Partial<IHighlight>): IHighlight {
    return this.highlightsService.update(id, highlight);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.highlightsService.delete(id);
  }
}
