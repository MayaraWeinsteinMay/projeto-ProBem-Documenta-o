import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { get } from "http";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../service/categoria.service";

@ApiTags('Categoria')
@UseGuards(JwtAuthGuard)
@Controller ("/categoria")
@ApiBearerAuth()
export class CategoriaController{
    constructor(private readonly categoriaService: CategoriaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id: number): Promise <Categoria> {
        return this.categoriaService.findById(id)
    } 

    @Get('/nome/:nome')
    @HttpCode (HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise <Categoria[]>{
        return this.categoriaService.findByNome(nome)
    }

    @Get ('/doacao/:doacao')
    @HttpCode (HttpStatus.OK)
    findByDoacao(@Param('doacao') doacao:boolean): Promise <Categoria[]>{
        return this.categoriaService.findByDoacao(doacao) 
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: Categoria): Promise <Categoria>{
        return this.categoriaService.create(categoria)

    } 
    
    @Put()
    @HttpCode(HttpStatus.OK)
    update (@Body()categoria:Categoria): Promise <Categoria>{

        return this.categoriaService.update(categoria)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    Delete(@Param('id', ParseIntPipe) id:number){
    return this.categoriaService.Delete(id)
}}