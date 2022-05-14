import '@testing-library/jest-dom'
import CalculatorCubit, { CalculatorData } from './CalculatorCubit'

describe('CalculatorCubit', () => {
  let calculatorState: CalculatorData

  beforeEach(() => {
    jest.resetAllMocks()
    calculatorState = {
      activeStep: 0,
      employees: '',
      revenue: '',
      ticketTime: 50,
      ticketVolume: 250000,
      ticketCost: 50,
    }
  })

  function setUserStateDefaults(cubit: CalculatorCubit) {
    cubit.setEmployees(10000)
    cubit.setRevenue(1000000000)
    cubit.setTicketTime(40)
    cubit.setTicketVolume(100000)
    cubit.setTicketCost(25)
  }

  it('should add the protected `emit` method', () => {
    expect(new CalculatorCubit()).toHaveProperty('emit')
  })

  it('should increment the active step', () => {
    const cubit = new CalculatorCubit()
    expect(cubit.state).toStrictEqual(calculatorState)
    cubit.nextStep()
    calculatorState.activeStep = 1
    expect(cubit.state).toStrictEqual(calculatorState)
  })

  it('should set employees', () => {
    const cubit = new CalculatorCubit()
    cubit.setEmployees(300)
    calculatorState.employees = 300
    expect(cubit.state).toStrictEqual(calculatorState)
  })

  it('should set revenue', () => {
    const cubit = new CalculatorCubit()
    cubit.setRevenue(40000)
    calculatorState.revenue = 40000
    expect(cubit.state).toStrictEqual(calculatorState)
  })

  it('should set ticketTime', () => {
    const cubit = new CalculatorCubit()
    cubit.setTicketTime(18)
    calculatorState.ticketTime = 18
    expect(cubit.state).toStrictEqual(calculatorState)
  })

  it('should set ticketVolume', () => {
    const cubit = new CalculatorCubit()
    cubit.setTicketVolume(16500)
    calculatorState.ticketVolume = 16500
    expect(cubit.state).toStrictEqual(calculatorState)
  })

  it('should set ticketCost', () => {
    const cubit = new CalculatorCubit()
    cubit.setTicketCost(13488)
    calculatorState.ticketCost = 13488
    expect(cubit.state).toStrictEqual(calculatorState)
  })

  it('should calculate tickets resolved', () => {
    const cubit = new CalculatorCubit()
    cubit.setTicketVolume(100000)
    expect(cubit.getTicketsResolved()).toBe(20000)
  })

  it('should calculate tickets accelerated', () => {
    const cubit = new CalculatorCubit()
    cubit.setTicketVolume(100000)
    expect(cubit.getTicketsAccelerated()).toBe(15000)
  })

  it('should calculate productive hours saved', () => {
    const cubit = new CalculatorCubit()
    setUserStateDefaults(cubit)
    expect(cubit.getProductiveHoursSaved()).toBe(4.6)
  })

  it('should calculate wait hours saved', () => {
    const cubit = new CalculatorCubit()
    setUserStateDefaults(cubit)
    expect(cubit.getWaitHoursSaved()).toBe(92)
  })

  it('should calculate operation resolution', () => {
    const cubit = new CalculatorCubit()
    setUserStateDefaults(cubit)
    expect(cubit.getOperationalResolution()).toBe(500000)
  })

  it('should calculate operation acceleration', () => {
    const cubit = new CalculatorCubit()
    setUserStateDefaults(cubit)
    expect(cubit.getOperationalAcceleration()).toBe(37500)
  })

  it('should calculate experience resolution', () => {
    const cubit = new CalculatorCubit()
    setUserStateDefaults(cubit)
    expect(cubit.getExperienceResolution()).toBe(961538)
  })

  it('should calculate experience acceleration', () => {
    const cubit = new CalculatorCubit()
    setUserStateDefaults(cubit)
    expect(cubit.getExperienceAcceleration()).toBe(721154)
  })

  it('should calculate experience acceleration', () => {
    const cubit = new CalculatorCubit()
    setUserStateDefaults(cubit)
    expect(cubit.getTotalBenefit()).toBe(2220192)
  })
})
