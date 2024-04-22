// Importar PrismaClient
import { PrismaClient } from '@prisma/client';

// Criar uma instância do PrismaClient
const prisma = new PrismaClient();

// Inserir Departamentos
async function inserirDepartamentos() {
  await prisma.departamento.createMany({
    data: [
      { sigla: 'DHC', descricao: 'Dep. História', nome: 'Departamento de História' },
      { sigla: 'DCT', descricao: 'Dep. Computação', nome: 'Departamento de Computação' },
      { sigla: 'DGC', descricao: 'Dep. Geografia', nome: 'Departamento de Geografia' },
      { sigla: 'DIR', descricao: 'Dep. Direito', nome: 'Departamento de Direito' },
    ],
  });
}

// Inserir Funcionários Gerentes
async function inserirFuncionariosGerentes() {
  await prisma.funcionario.createMany({
    data: [
      { nome: 'Ana', sexo: 'F', dtNasc: new Date('1988-05-07'), salario: 2500.00 },
      { nome: 'Taciano', sexo: 'M', dtNasc: new Date('1980-01-25'), salario: 2500.00 },
    ],
  });
}

// Atualizar Gerentes de Departamentos
async function atualizarGerentesDepartamentos() {
  await prisma.departamento.updateMany({
    where: { OR: [{ sigla: 'DHC' }, { sigla: 'DCT' }] },
    data: { gerenteId: 1 }, // Altere o ID do gerente conforme necessário
  });
}

// Inserir Funcionários
async function inserirFuncionarios() {
  await prisma.funcionario.createMany({
    data: [
      { nome: 'Maria', sexo: 'F', dtNasc: new Date('1981-07-01'), salario: 2500.00, supervisorId: 1, departamentoId: 1 },
      // Adicione mais funcionários conforme necessário
    ],
  });
}

// Inserir Projetos
async function inserirProjetos() {
  await prisma.projeto.createMany({
    data: [
      // Adicione os projetos aqui
    ],
  });
}

// Inserir Atividades
async function inserirAtividades() {
  await prisma.atividade.createMany({
    data: [
      // Adicione as atividades aqui
    ],
  });
}

// Função principal para executar as operações
async function main() {
  try {
    // Inserir dados fictícios
    await inserirDepartamentos();
    await inserirFuncionariosGerentes();
    await atualizarGerentesDepartamentos();
    await inserirFuncionarios();
    await inserirProjetos();
    await inserirAtividades();
    
    console.log('Dados fictícios inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao inserir dados fictícios:', error);
  } finally {
    // Desconectar do banco de dados
    await prisma.$disconnect();
  }
}

// Chamar a função principal
main();
