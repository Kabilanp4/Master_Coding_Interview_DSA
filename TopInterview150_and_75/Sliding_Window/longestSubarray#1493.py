class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        start =0
        maxCount=0
        zeroCount =0
        for index,end in enumerate(nums):
            if end == 0:
                zeroCount+=1
            while zeroCount > 1:
                if nums[start] == 0:
                    zeroCount-=1
                start+=1
            maxCount = max(maxCount,index-start+1)
        return maxCount - 1