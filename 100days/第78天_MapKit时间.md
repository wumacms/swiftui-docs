# 第78天 MapKit 时间

昨天你开发了一个能从用户图库导入照片的新应用，希望你对完成的成果感到满意——或者至少在朝着完成产品的方向稳步推进。

但你的老板过来要求增加一项新功能：当查看导入的图片时，你需要显示一张地图，并用大头针标记出用户添加该图片时所在的位置。这个地图可以与照片在同一屏幕上并排显示，也可以通过分段控制器显示或隐藏，或者放在另一个屏幕上——具体方式由你决定。无论如何，你已经知道如何添加大头针，也知道如何使用地图视图的中心坐标，所以剩下唯一需要解决的问题，就是如何获取用户的位置，并将其与文本和图片一起保存。

虽然我希望你能挑战自己的技能，但我也不会“不近人情”。因此，这里提供一个获取用户位置的类：

```swift
import CoreLocation

class LocationFetcher: NSObject, CLLocationManagerDelegate {
    let manager = CLLocationManager()
    var lastKnownLocation: CLLocationCoordinate2D?

    override init() {
        super.init()
        manager.delegate = self
    }

    func start() {
        manager.requestWhenInUseAuthorization()
        manager.startUpdatingLocation()
    }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        lastKnownLocation = locations.first?.coordinate
    }
}
```

要使用这个类，首先需要在应用目标的“Info”标签页中添加一个新键，就像我们之前需要Face ID权限时做的那样。这个键名为“Privacy - Location When In Use Usage Description”（隐私 - 使用期间定位服务描述），然后给它设置一个值，向用户解释为什么需要获取他们的位置。

现在你可以在SwiftUI视图中这样使用它：

```swift
struct ContentView: View {
    let locationFetcher = LocationFetcher()

    var body: some View {
        VStack {
            Button("开始追踪位置") {
                locationFetcher.start()
            }

            Button("读取位置") {
                if let location = locationFetcher.lastKnownLocation {
                    print("你的位置是 \(location)")
                } else {
                    print("你的位置未知")
                }
            }
        }
    }
}
```

如果你使用的是模拟器而非真实设备，可以通过“Debug”（调试）菜单伪造位置，选择“Location”（位置）>“Apple”即可。

现在就看你的了：你能实现老板要求的这个功能，把MapKit和SwiftUI整合到同一个应用中吗？