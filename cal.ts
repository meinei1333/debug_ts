function cal(oStartTime: Date, oEndTime: Date, oSalary: number, oLeftDay: number) {
    let daies = (oEndTime.getTime() - oStartTime.getTime()) / 1000 / 60 / 60 / 24;
    let isOverOneYear: boolean = daies > 365;
    let leftDay = oLeftDay;
    if (isOverOneYear) {
        leftDay += 20;
    } else {
        leftDay += 10;
    }
    return (oSalary * 0.5 / 12 * (daies / 30)) + oSalary / 30 * leftDay;
}

console.log(cal(new Date("2019/04/22"), new Date("2020/05/22"), 115000, 5));