import { Cubit } from 'blac'

export interface CalculatorData {
  activeStep: number
  employees: string | number
  revenue: string | number
  ticketTime: number
  ticketVolume: number
  ticketCost: number
}

export default class CalculatorCubit extends Cubit<CalculatorData> {
  constructor() {
    super({
      activeStep: 0,
      employees: '',
      revenue: '',
      ticketTime: 50,
      ticketVolume: 250000,
      ticketCost: 50,
    })
  }

  nextStep = (): void => {
    this.state.activeStep++
    this.emit(this.state)
  }

  setEmployees = (employees: string | number): void => {
    this.state.employees = employees
    this.emit(this.state)
  }

  setRevenue = (revenue: string | number): void => {
    this.state.revenue = revenue
    this.emit(this.state)
  }

  setTicketTime = (ticketTime: number): void => {
    this.state.ticketTime = ticketTime
    this.emit(this.state)
  }

  setTicketVolume = (ticketVolume: number): void => {
    this.state.ticketVolume = ticketVolume
    this.emit(this.state)
  }

  setTicketCost = (ticketCost: number): void => {
    this.state.ticketCost = ticketCost
    this.emit(this.state)
  }

  getTicketsResolved = (): number => {
    return this.state.ticketVolume * 0.2
  }

  getTicketsAccelerated = (): number => {
    return this.state.ticketVolume * 0.15
  }

  getProductiveHoursSaved = (): number => {
    // 0.05 * (Resolved * TTR + Accelerated * TTR * 0.2) / Employees
    return (
      (0.05 *
        (this.getTicketsResolved() * this.state.ticketTime +
          this.getTicketsAccelerated() * this.state.ticketTime * 0.2)) /
      Number(this.state.employees)
    )
  }

  getWaitHoursSaved = (): number => {
    // (Resolved * TTR + Accelerated * TTR * 0.2) / Employees
    return (
      (this.getTicketsResolved() * this.state.ticketTime +
        this.getTicketsAccelerated() * this.state.ticketTime * 0.2) /
      Number(this.state.employees)
    )
  }

  getOperationalResolution = (): number => {
    // Resolved * CPT
    const amt = this.getTicketsResolved() * this.state.ticketCost
    return Math.round(amt)
  }

  getOperationalAcceleration = (): number => {
    // Resolved * CPT
    const amt = this.getTicketsAccelerated() * this.state.ticketCost * 0.1
    return Math.round(amt)
  }

  getExperienceResolution = (): number => {
    // Resolved * Revenue/(Employee * 2080)
    const amt = this.getTicketsResolved()
    * Number(this.state.revenue)
    / (Number(this.state.employees) * 2080)
    return Math.round(amt)
  }

  getExperienceAcceleration = (): number => {
    // Accelerated * Revenue/(Employee * 2080)
    const amt = this.getTicketsAccelerated()
    * Number(this.state.revenue)
    / (Number(this.state.employees) * 2080)
    return Math.round(amt)
  }

  getTotalBenefit = (): number => {
    return this.getOperationalResolution()
      + this.getOperationalAcceleration()
      + this.getExperienceResolution()
      + this.getExperienceAcceleration()
  }
}
