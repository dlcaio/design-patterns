interface IObserver {
  update: () => void;
}

interface IObservable {
  add: (observer: IObserver) => void;
  // remove: (observer: IObserver) => void;
  notify: () => void;
}

class WeatherStation implements IObservable{
  // could be other DS than Array for more efficient removal
  observers: Array<IObserver> = [];
  temperature: number = 0;
  
  add(observer: IObserver) {
    this.observers.push(observer);
  }
  
  notify() {
    this.observers.forEach(o => o.update());
  }
  
  getTemperature() {
    return this.temperature;
  }
}

class WeatherWebApp implements IObserver {
  station: WeatherStation;
  id: number;
  constructor(id: number, station: WeatherStation) {
    this.id = id;
    this.station = station;
  }
  
  update() {
    console.log(`app ${this.id}'s temperature: ${this.station.getTemperature()}`)
  }
}

const ws = new WeatherStation();

ws.add(new WeatherWebApp(1, ws))
ws.add(new WeatherWebApp(45, ws))
ws.add(new WeatherWebApp(99012, ws))

ws.notify();
