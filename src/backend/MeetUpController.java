import com.alibaba.fastjson.JSON;
import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.*;
import java.util.concurrent.TimeUnit;

/**
 * 后端接口，启动在：http://localhost:8080
 */
@RestController
public class MeetUpController {

    private static final Cache<String, MeetupDTO> CACHE = CacheBuilder.newBuilder()
            .initialCapacity(5)
            .maximumSize(10)
            .expireAfterWrite(2, TimeUnit.DAYS)
            .build();

    static {
        MeetupDTO meetup1 = MeetupDTO.builder()
                .id("m1")
                .title("This is a first meetup")
                .image("https://th.bing.com/th?id=ABT25F66B3CAC112959892E7F6FE7CA206FC96B7C2D8B52094949EF574036042212&w=608&h=160&c=2&rs=1&o=6&pid=SANGAM")
                .address("敦煌月牙泉")
                .description("月牙泉位于中国甘肃省敦煌市附近，是隐藏在广袤戈壁滩上的一个摄人心魄的自然奇观。数百年来，这片因独特的月牙形状而闻名的绿洲，一直是一个重要的水源地。")
                .build();

        MeetupDTO meetup2 = MeetupDTO.builder()
                .id("m2")
                .title("This is a second meetup")
                .image("https://th.bing.com/th?id=ABTD4D1A40FB3FB373289411E10462DD83459C31CBC3383893E3490C3AF139A2936&w=608&h=160&c=2&rs=1&o=6&pid=SANGAM")
                .address("挪威斯托尔桑德特大桥")
                .description("挪威的大西洋海滨公路连接了一系列大大小小的岛屿，一路上风景如画，设置有8座桥梁，其中最长的桥梁就是图上的这座斯托尔桑德特大桥。")
                .build();
        CACHE.put(meetup1.getId(), meetup1);
        CACHE.put(meetup2.getId(), meetup2);
    }


    @GetMapping("/meetups.json")
    public String getAllMeetups(){
        Map<String, MeetupDTO> meetupMap = CACHE.asMap();
        List<MeetupDTO> meetupList = new ArrayList<>(meetupMap.values());
        return JSON.toJSONString(meetupList);
    }

    @PostMapping("/meetups.json")
    public Map<String, Object> addMeetup(@RequestBody MeetupDTO meetupDTO){
        CACHE.put(UUID.randomUUID().toString(), meetupDTO);
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("status", "success");
        responseMap.put("meetup", meetupDTO);
        return responseMap;
    }
    @Data
    @EqualsAndHashCode(callSuper = false)
    @Accessors(chain = true)
    @Builder
    public static class MeetupDTO implements Serializable {
        private String id;
        private String title;
        private String image;
        private String address;
        private String description;
    }
}

